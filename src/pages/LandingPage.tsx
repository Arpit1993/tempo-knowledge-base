import { useTheme } from "@mui/material";
import { OrganisationType } from "../types";
import styled from "@emotion/styled";
import { SearchIcon } from "../components/icons/Search";
import {
  BookOpenIcon,
  ChatAlt2Icon,
  CollectionIcon,
  CreditCardIcon,
  DocumentTextIcon,
  HomeIcon,
  LightModeIcon,
  MailIcon,
  MapIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  TerminalIcon,
  UserGroupIcon,
  UserIcon,
  ViewGridAddIcon,
} from "../components/icons";

const LandingPageWrapper = styled.div`
  text-align: center;
  max-width: 1200px;
  padding: 0px 120px;
`;
const TextAreaWrapper = styled.div`
  position: relative;
`;
const CustomTextArea = styled.textarea`
  height: 60px;
  max-height: 60px;
  background-color: #24283180;
  width: 100%;
  border-radius: 4px;
  font-size: 18px;
  padding: 16px 48px 16px 16px;
  border-style: none;
`;

const CustomSearch = styled(SearchIcon)`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

const CardContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  margin-top: 4rem;
`;

const CardContainer = styled.div`
  padding: 16px;
  cursor: pointer;
  border-radius: 8px;
  background-color: #b2b8cd03;
  width: 400px;
  border: 1px solid #b2b8cd0f;

`;

const ImageContainer = styled.div`
  text-align: left;
  margin-bottom: 1rem;
`;

const ImageIconWrapper = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #947bff1a;
  border-radius: 6px;
`;

const PrimaryHeading = styled.h3`
  text-align: left;
`;
const DescriptionText = styled.p`
  text-align: left;
  margin-top: 8px;
`;
const AuthorArticleContainer = styled.div`
  display: flex;
  padding-top: 16px;
  margin-top: 16px;
`;
const ImageWrapper = styled.div`
  display: flex;
  margin-left: 8px;
`;
const CustomImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #000000;
  margin-left: -10px;
`;
export const LandingPage = ({
  organizationList,
}: {
  organizationList: OrganisationType;
}) => {
  const imageDirectory = {
    BookOpenIcon,
    ChatAlt2Icon,
    CollectionIcon,
    CreditCardIcon,
    DocumentTextIcon,
    HomeIcon,
    LightModeIcon,
    MailIcon,
    MapIcon,
    SparklesIcon,
    SpeakerphoneIcon,
    TerminalIcon,
    UserGroupIcon,
    UserIcon,
    ViewGridAddIcon,
  };

  if (!organizationList.structure) {
    return;
  }

  const config = organizationList.structure.map((item) => {
    const { authors, description, articleCount, name, icon } = item;
    return { authors, description, articleCount, name, icon };
  });

  const returnComponent = (value) => {
    const CustomComponent = imageDirectory[value];
    console.log("===CustomComponent", CustomComponent);
    return CustomComponent ? (
      <CustomComponent width={16} height={16} fill={'#947bff'}/>
    ) : (
      <img src="" />
    );
  };
  const theme = useTheme();
  return (
    <LandingPageWrapper>
      <h1 style={{marginBottom: '2rem'}}>How can we help you?</h1>
      <p style={{marginBottom: '2rem'}}>
        Get answers in seconds with our AI search or find them in our detailed
        articles.
      </p>
      <TextAreaWrapper>
        <CustomTextArea placeholder="Ask AI or search for articles"></CustomTextArea>
        <CustomSearch fill={theme.palette.primary.main} />
      </TextAreaWrapper>
      <CardContainerWrapper>
        {config.map((item) => {
          return (
            <CardContainer>
              <ImageContainer>
                <ImageIconWrapper>
                  {returnComponent(item.icon.value)}
                </ImageIconWrapper>
              </ImageContainer>
              <PrimaryHeading>{item.name}</PrimaryHeading>
              <DescriptionText>{item.description}</DescriptionText>
              <AuthorArticleContainer>
                <ImageWrapper>
                  {item.authors.map((author) => {
                    return <CustomImage src={author.avatarUrl} />;
                  })}
                </ImageWrapper>
                <p>{item.articleCount} articles</p>
              </AuthorArticleContainer>
            </CardContainer>
          );
        })}
      </CardContainerWrapper>
    </LandingPageWrapper>
  );
};
