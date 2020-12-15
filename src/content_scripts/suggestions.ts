import {
	PrismLanguage,
	Language,
	languages as allLanguages,
	isPrismLanguage,
} from "./languages";

const variations = [/^learn_?(\w+)$/i, /^(\w+?)_?lang(?:uage)?$/i];

function filterSubredditName(subreddit: string) {
	for (const regex of variations) {
		const match = subreddit.match(regex);
		if (match) {
			return match[1];
		}
	}
	return subreddit;
}

interface Suggestion {
	subreddits: Set<string>;
	languages: PrismLanguage[];
}

const suggestions: Suggestion[] = [
	{
		subreddits: new Set(["webdev", "javascript", "typescript", "react"]),
		languages: ["javascript", "css", "markup", "json", "jsx"],
	},
];

function getSubreddit() {
	const match = location.pathname.match(/^\/r\/(\w+)/);
	return match ? match[1] : null;
}

export function getSuggestions(): Language[] {
	const result = new Set<PrismLanguage>(["none"]);
	const subreddit = getSubreddit();

	if (subreddit) {
		const filteredSubreddit = filterSubredditName(subreddit);

		if (isPrismLanguage(filteredSubreddit)) {
			result.add(filteredSubreddit);
		}

		for (const { subreddits, languages } of suggestions) {
			if (subreddits.has(filteredSubreddit)) {
				languages.forEach(x => result.add(x));
			}
		}
	}

	return [...result].map(x => allLanguages[x]);
}

export function getDefaultLanguage(): Language {
	const subreddit = getSubreddit();

	if (!subreddit) {
		return allLanguages.none;
	}

	const filteredSubreddit = filterSubredditName(subreddit);
	if (isPrismLanguage(filteredSubreddit)) {
		return allLanguages[filteredSubreddit];
	}
	return allLanguages.none;
}
