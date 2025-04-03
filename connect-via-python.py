from pymongo import MongoClient

# Connect to your MongoDB instance
client = MongoClient('mongodb://localhost:27017/')

# Select the database
db = client['coolDb']

# Get all collection names
all_collections = db.list_collection_names()

# Filter collections that do not end with '2023'
filtered_collections = [name for name in all_collections if not name.endswith('2023')]

# Print the filtered collection names
for collection in filtered_collections:
    print(collection)