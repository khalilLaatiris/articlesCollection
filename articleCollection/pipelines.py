# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import pymongo
from scrapy.utils.project import get_project_settings

#get a setting variables from setting file
settings = get_project_settings() 

class ArticlecollectionPipeline:
    def __init__(self):
        connection = pymongo.MongoClient(
            settings['MONGODB_SERVER'],
            settings['MONGODB_PORT']
        )
        db = connection[settings['MONGODB_DB']]
        self.collection = db[settings['MONGODB_COLLECTION']]

        # process_item function is used for inserting data to our mongoDB Atlas database 
        # we use a test if some article is missing the function wil raise an error and will not insert data in database
    def process_item(self, item, spider):
        valid=True
        for data in item:
            if not data:
                valid=False
                raise DropItem("Missing {0}!".format(data))
        if valid:
            self.collection.insert(dict(item))
        return item





