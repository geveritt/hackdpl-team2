class Event
  
  def self.import_feed
    feed = Feedjira::Feed.fetch_and_parse('http://www.detroit.lib.mi.us/events/rss.xml')
    feed.entries
  end
  
end