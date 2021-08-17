# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

from scrapy.item import Item, Field



class ArticlecollectionItem(Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    headline = Field()
    link = Field()
    author = Field()
    text = Field()
    image = Field()
    subject = Field()
    date_time = Field()
