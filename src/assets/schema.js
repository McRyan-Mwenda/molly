import { gql } from "@apollo/client";

export const AUTHORS = gql`
  query Authors {
    authors {
      id
      authorName
      bio
      profileImage {
        url
      }
    }
  }
`;

export const AUTHOR = gql`
  query Author($id: ID!) {
    author(where: { id: $id }) {
      id
      authorName
      bio
      profileImage {
        url
      }
    }
  }
`;

export const ALL_ARTICLES = gql`
  query AllArticles {
    articles {
      slug
      articleTitle
      articleIntroduction
      articleThumbnail {
        url
      }
      articleContent {
        html
      }
      articleTags
      author {
        authorName
        bio
        profileImage {
          url
        }
      }
      articlePublishDate
    }
  }
`;

export const ARTICLE_BY_SLUG = gql`
  query ArticleBySlug($slug: String!) {
    article(where: { slug: $slug }) {
      articleTitle
      articleIntroduction
      articleThumbnail {
        url
      }
      articleContent {
        html
      }
      articleTags
      author {
        authorName
        bio
        profileImage {
          url
        }
      }
      articlePublishDate
    }
  }
`;

export const ARTICLES_BY_TAG = gql`
  query ArticlesByTag($tag: [ArticleTags!]) {
    articles(where: { articleTags: $tag }) {
      slug
      articleTitle
      articleIntroduction
      articleThumbnail {
        url
      }
      articleContent {
        html
      }
      articleTags
      author {
        authorName
        bio
        profileImage {
          url
        }
      }
      articlePublishDate
    }
  }
`;

export const FAQs = gql`
  query FAQs {
    questions {
      question
      answer
    }
  }
`;

export const ALL_EVENTS = gql`
  query AllEvents {
    events {
      slug
      eventIsActive
      eventTitle
      eventDescription
      eventFeaturedImages {
        url
      }
      eventLocation
      eventRegistrationLink
      eventStartDate
      eventEndDate
      organizer {
        organizerName
        organizerDescription
        organizerContactEmail
        organizerLogo {
          url
        }
        organizerWebsite
      }
      speakers {
        speakerName
        bio
        speakerImage {
          url
        }
        socialMedia
      }
    }
  }
`;

export const EVENT_BY_SLUG = gql`
  query EventBySlug($slug: String!) {
    event(where: { slug: $slug }) {
      slug
      eventIsActive
      eventTitle
      eventDescription
      eventFeaturedImages {
        url
      }
      eventLocation
      eventRegistrationLink
      eventStartDate
      eventEndDate
      organizer {
        organizerName
        organizerDescription
        organizerContactEmail
        organizerLogo {
          url
        }
        organizerWebsite
      }
      speakers {
        speakerName
        bio
        speakerImage {
          url
        }
        socialMedia
      }
    }
  }
`;
