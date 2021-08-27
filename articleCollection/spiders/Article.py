from scrapy import Spider
from articleCollection.items import ArticlecollectionItem
from time import strftime

# this class indicate how the data will be gotten from the guardians website

class ActicleSpider(Spider):
    name = "Article"
    allowed_domains = ["theguardian.com"]
    start_urls = [
            'http://www.theguardian.com/international',
            #'http://www.theguardian.com',
        ]

    def parse(self, response):
    	# get every article link from the home page of the web
    	articles=response.css('li.fc-slice__item div.fc-item__container')
    	for article in articles:
    		yield response.follow(article.css('a.u-faux-block-link__overlay::attr(href)').get(),callback=self.parse_article)
    def parse_article(self,response):
    	#get information from every article in the web site the guardiens 
    	item=ArticlecollectionItem()

    	item['headline']=response.css('article h1::text').get()
    	item['link']=response.request.url
    	item['author']=response.css('a[rel=author]::text').get()
    	item['text']='\n'.join(response.css('article main div p::text').getall())
    	item['image']=response.css('article picture img::attr(src)').get()
    	item['subject']=response.css('article div a > span::text').get()
    	item['date_time']=response.css('div.dcr-s64set label.dcr-hn0k3p::text').get()
    	yield item