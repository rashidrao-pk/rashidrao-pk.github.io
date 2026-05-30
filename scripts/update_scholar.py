from scholarly import scholarly
import json
from datetime import date

AUTHOR_ID = "F5u_Z5MAAAAJ"

author = scholarly.search_author_id(AUTHOR_ID)
author = scholarly.fill(author)

data = {
    "scholar_hindex": author["hindex"],
    "scholar_citations": author["citedby"],
    "scholar_publications": len(author["publications"]),
    "updated": str(date.today())
}

with open("_data/research_metrics.json", "w") as f:
    json.dump(data, f, indent=2)

print("Updated metrics:")
print(data)