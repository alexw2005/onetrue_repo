def handler(event, context):
    return {
        "statusCode": 200,
        "headers": {"content-type": "application/json"},
        "body": '{"items":[{"id":"demo-item","brand":"OneTrue"}]}'
    }
