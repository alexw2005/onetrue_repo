import json
def handler(event, context):
    return {
        "statusCode": 201,
        "headers": {"content-type": "application/json"},
        "body": json.dumps({"ok": True, "message": "offer created"})
    }
