import json
import boto3


def handler(event, context):
    client = boto3.resource('dynamodb')
    table = client.Table('Transaction')

    response = table.put_item(
        Item={
            'id': 1,
            'info': {'Store': 'Walmart'}
        }
    )
    return response

