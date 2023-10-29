export interface IResponse {
	data: any,
	isLoading: boolean,
	error: Error | null,
	refetch: Function
};

export interface ITrendingResponse extends IResponse {
	data: {
		query: string,
		works: ITrendingItem[],
		days: number
	}
};


/**
 * Interface for a trending book
 */
export interface ITrendingItem {
	/**
	 * Endpoint for the book's page
	 */
	key: string,
	/**
	 * Title of the book.
	 */
	title: string,
	/**
	 * The year when  was first published.
	 */
	first_publish_year: number,
	/**
	 * Indicates whether the item has full text available.
	 */
	has_fulltext: boolean,
	/**
	 * Unique key for the edition's cover
	 */
	cover_edition_key: string,
	/**
	 * 
	 */
	cover_i: number,
	/**
	 * An array of languages associated.
	 */
	language: string[],
	/**
	 * An array of unique identifiers for the authors of the item.
	 */
	author_key: string[],
	/**
	 *  An array of author names associated
	 */
	author_name: string[]
};

export interface IWorkEdition extends IResponse {
	data: {
		[key: string]: {
			url: string,
			key: string,
			title: string,
			subtitle: string,
			authors: Array<{
				url: string,
				name: string
			}>,
			number_of_pages: number,
			publishers: Array<{
				name: string
			}>,
			publish_date: string,
			subjects: Array<{
				name: string,
				url: string
			}>,
			cover: {
				small: string,
				medium: string,
				large: string
			}
		}
	}
};