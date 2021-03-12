const getSubredditName = require('../../utils/getSubredditName');

describe("tests for getSubredditName function", () => {
    it("should return subreddit name", () => expect(getSubredditName("https://www.reddit.com/r/javascript/")).toBe("javascript"));
    it("should return subreddit name", () => expect(getSubredditName("https://www.reddit.com/r/javascript")).toBe("javascript"));
    it("should return subreddit name", () => expect(getSubredditName(" https://www.reddit.com/r/javascript ")).toBe("javascript"));
    it("should return invalid name", () => expect(getSubredditName("https://www.reddit.com/r/javascript//")).not.toBe("javascript"));
    it("should return empty string", () => expect(getSubredditName("https://www.yandex.ru")).toBe(""));
    it("should return empty string", () => expect(getSubredditName(1000)).toBe(""));
    it("should return empty string", () => expect(getSubredditName({ 'a': 0 })).toBe(""));
});