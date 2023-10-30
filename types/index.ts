export interface IResponse {
  data: any;
  isLoading: boolean;
  error: Error | null;
  refetch: Function;
}

export interface ITrendingResponse extends IResponse {
  data: {
    query: string;
    works: ITrendingItem[];
    days: number;
  };
}

/**
 * Interface for a trending book
 */
export interface ITrendingItem {
  /**
   * Endpoint for the work's page
   */
  key: `works/${T_Work_Key}`;
  title: string;
  first_publish_year: number;
  has_fulltext: boolean;
  cover_edition_key: T_Edition_Key;
  cover_i: number;
  language: string[];
  author_key: string[];
  author_name: string[];
}

export interface IWorkEdition extends IResponse {
  data: {
    [key: string]: {
      url: string;
      key: string;
      title: string;
      subtitle: string;
      authors: {
        url: string;
        name: string;
      }[];
      identifiers: {
        isbn_13?: string[];
        isbn_10?: string[];
        openlibrary?: string[];
      };
      number_of_pages: number;
      publishers: {
        name: string;
      }[];
      publish_date: string;
      subjects: {
        name: string;
        url: string;
      }[];
      cover: {
        small: string;
        medium: string;
        large: string;
      };
    };
  };
}

export interface IWork extends IResponse {
  data: {
    description: string;
    subjects: string[];
    key: string;
    title: string;
    authors: {
      author: {
        key: string;
      };
      type: {
        key: string;
      };
    }[];
    type: {
      key: string;
    };
    covers: number[];
    links: {
      title: string;
      url: string;
      type: {
        key: string;
      };
    }[];
    latest_revision: number;
    revision: number;
    created: {
      type: string;
      value: string;
    };
    last_modified: {
      type: string;
      value: string;
    };
  };
}

export type T_Edition_Key = `OL${string}M`;

export type T_Work_Key = `OL${string}W`;
