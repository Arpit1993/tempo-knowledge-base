import styled from "@emotion/styled";
import Modal from "@mui/material/Modal";
import { SearchIcon } from "../components/icons/Search";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { getAIHits } from "../data";
import { CloseIcon } from "../components/icons";
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

const Wrapper = styled.div`
  padding: 64px;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(4px);
  height: 100vh;
`;

const SearchResultWrapper = styled.div`
  border-color: #ffffff0d;
  background-color: #13161f99;
  border-radius: 8px;
  margin-top: 1.25rem;
  max-height: 500px;
  overflow-y: scroll;
`;

const ContentOuterWrapper = styled.div`
  border-bottom: 1px solid #242831;
  background-color: rgba(148, 123, 255, 0.035);
  
`;

const ContentWrapper = styled.div`
  padding: 16px;
  cursor: pointer;
`;

const Border = styled.div`
  width: 700px;
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
  background-color: #13161f99;
  border-radius: 8px;
  padding: 6px;
  cursor: pointer;
`;

export const SearchModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const theme = useTheme();
  const [searchResults, setSearchResults] = useState([]);
  const getAISearchHits = async () => {
    const { data: result } = await getAIHits();
    const filteredData = result.map((query) => {
      const { title, description } = query;
      return { title, description };
    });
    setSearchResults(filteredData);
  };
  useEffect(() => {
    getAISearchHits();
  }, []);
  return (
    <Modal open={open} onClose={handleClose}>
      <Wrapper>
        <Border>
          <TextAreaWrapper>
            <CustomTextArea placeholder="Ask AI or search for articles"></CustomTextArea>
            <CustomSearch fill={theme.palette.primary.main} />
          </TextAreaWrapper>
          <SearchResultWrapper>
            {searchResults.map((article) => {
              return (
                <ContentOuterWrapper>
                  <ContentWrapper>
                    <p style={{ fontSize: "14px", fontWeight: 600 }}>
                      {article.title}
                    </p>
                    <p style={{ fontSize: "13px", marginTop: "8px" }}>
                      {article.description}
                    </p>
                  </ContentWrapper>
                </ContentOuterWrapper>
              );
            })}
          </SearchResultWrapper>
        </Border>
        <CloseButtonWrapper onClick={handleClose}>
          <CloseIcon width={24} height={24} fill={theme.palette.primary.main}/>
        </CloseButtonWrapper>
      </Wrapper>
    </Modal>
  );
};
