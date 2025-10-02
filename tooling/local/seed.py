import boto3, os
from botocore.config import Config
ddb = boto3.resource('dynamodb', endpoint_url='http://localhost:8000', region_name='us-west-2', config=Config(retries={'max_attempts': 1}))
try:
    table = ddb.create_table(
        TableName='onetrue_events_dev',
        KeySchema=[{'AttributeName':'pk','KeyType':'HASH'},{'AttributeName':'sk','KeyType':'RANGE'}],
        AttributeDefinitions=[{'AttributeName':'pk','AttributeType':'S'},{'AttributeName':'sk','AttributeType':'S'}],
        BillingMode='PAY_PER_REQUEST'
    )
    table.wait_until_exists()
    print("Created onetrue_events_dev")
except Exception as e:
    print("Seed note:", e)
