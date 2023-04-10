module.exports = {
  bodyError:{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "success": {
        "type": "integer"
      },
      "errors": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "value": {
                "type": "string"
              },
              "msg": {
                "type": "string"
              },
              "param": {
                "type": "string"
              },
              "location": {
                "type": "string"
              }
            },
            "required": [
              "value",
              "msg",
              "param",
              "location"
            ]
          }
        ]
      }
    },
    "required": [
      "success",
      "errors"
    ]
  },
  
  bodySuccess:{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "success": {
        "type": "integer"
      },
      "msg": {
        "type": "string"
      }
    },
    "required": [
      "success",
      "msg"
    ]
  },

  headerError:{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "success": {
        "type": "integer"
      },
      "errors": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "msg": {
                "type": "string"
              },
              "param": {
                "type": "string"
              }
            },
            "required": [
              "msg",
              "param"
            ]
          }
        ]
      }
    },
    "required": [
      "success",
      "errors"
    ]
  }
}