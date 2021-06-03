import json
import boto3


def handler(event, context):
    client = boto3.resource('dynamodb')
    table = client.Table('Transaction')

    response = table.get_item(
        Key={'id': 1}
    )
    return response
