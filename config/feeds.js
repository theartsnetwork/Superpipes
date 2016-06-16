exports.feeds = {
    'first': { // Each feed needs to have an unique key.
        secret: 'art needs determination', // Optional but you should put a random sentence here to make things secure.
        name: "Artmarq News Mix",
        sources: [
            "http://feeds.feedburner.com/Wallpaperfeed"
			"http://www.observer.com/art/feed"
			"http://online.wsj.com/xml/rss/3_7201.xml"
			"http://feeds.wsjonline.com/wsj/video/life-and-style/feed"
			"http://feeds.wsjonline.com/wsj/video/arts-and-entertainment/feed"
			"http://feeds.wsjonline.com/wsj/video/fashion/feed"
			"http://www.nytimes.com/services/xml/rss/nyt/Arts.xml"
			"http://www.nytimes.com/services/xml/rss/nyt/InternationalArts.xml"
			"http://www.theartnewspaper.com/rss/rss.xml" 			
        ]
    },
    'profiles LA': {
        secret: 'and it needs focus', // Optional but you should put a random sentence here to make things secure.
        name: "Artmarq Profiles from LA",
        sources: [
            "http://www.latimes.com/entertainment/arts/rss2.0.xml",
            "http://www.latimes.com/entertainment/arts/culture/rss2.0.xml",
            "http://feeds.feedburner.com/CultureMonster",
            "http://superfeedr.tumblr.com/rss",
        ]
    }
}
