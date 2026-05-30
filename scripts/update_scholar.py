import time
import sys
from scholarly import scholarly

MAX_RETRIES = 3
RETRY_DELAY = 5  # seconds

def fetch_scholar_metrics(author_id, retry_count=0):
    try:
        author = scholarly.scholarly.search_author_id(author_id)
        scholarly.scholarly.pprint(author)
        return author
    except Exception as e:
        if retry_count < MAX_RETRIES:
            wait_time = RETRY_DELAY * (2 ** retry_count)  # exponential backoff
            print(f"Attempt {retry_count + 1} failed: {e}")
            print(f"Retrying in {wait_time} seconds...")
            time.sleep(wait_time)
            return fetch_scholar_metrics(author_id, retry_count + 1)
        else:
            print(f"Failed after {MAX_RETRIES} retries. Skipping update.")
            return None

# Your existing code to fetch and update metrics
if __name__ == "__main__":
    try:
        # fetch_scholar_metrics() call here
        pass
    except Exception as e:
        print(f"Fatal error: {e}")
        sys.exit(1)  # Let the workflow know it failed