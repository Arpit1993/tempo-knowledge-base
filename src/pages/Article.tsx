import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { getArticle } from "../data";
import Markdown from "markdown-to-jsx";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import styled from "@emotion/styled";
import { ScrollSpySection } from "../components/ScrollSpySection";
// import { useColorMode } from '../theme/ThemeContext';
export const Header = styled.h1`
  font-family: sans-serif;
`;

export const Text = styled.p`
  font-size: 16px;
  margin: 32px 0px;
  font-weight: 400;
  font-family: sans-serif;
`;

export const CustomImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const ArticleContainer = styled.div`
  padding: 0px 32px;
  display: flex;
  max-width: 1200px;
  height: inherit;
`;

export const ArticleSection = () => {
  const [article, setArticle] = useState("");
  const articleId = window.location.pathname.slice(1).split("-")[0];
  console.log(articleId);
  const theme = useTheme();
  // const { toggleColorMode } = useColorMode();
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const result = await getArticle(articleId);
        setArticle(result.data[0].body);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticle();
  }, []);

  return (
    <ArticleContainer>
    <Zoom>
      <Markdown
        options={{
          overrides: {
            h1: { component: Header },
            img: { component: CustomImage },
            Text: { component: Text },
            p: {component: Text}
          },
        }}
      >
        {article}
      </Markdown>
    </Zoom>
    {article && <ScrollSpySection />}
    </ArticleContainer>
  );
};
