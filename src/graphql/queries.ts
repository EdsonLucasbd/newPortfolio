import { gql } from "@apollo/client";

export const GET_HEADER_DATA = gql`
  query Header {
    header(where: {id: "clmz9h3924m9i0blzfjj0w7p6"}) {
      option {
        ... on OptionButoon {
          id
          title
          link
        }
      }
    }
  }
`

export const GET_BIO_DATA = gql`
  query Bio {
    bioContents {
      contentText {
        text
      }
    }
  }
`