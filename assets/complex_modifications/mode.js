{
  "description": "数字キーモード",
  "manipulators": [
    {
      "type": "basic",
      "from": {
        "key_code": "1"
      },
      "to": [
        {
          "key_code": "1",
          "modifiers": [
            "left_shift"
          ]
        }
      ],
      "conditions": [
        {
          "type": "variable_if",
          "name": "no_insert_mode",
          "value": 1
        }
      ]
    },
    {
      "type": "basic",
      "from": {
        "key_code": "2"
      },
      "to": [
        {
          "key_code": "2",
          "modifiers": [
            "left_shift"
          ]
        }
      ],
      "conditions": [
        {
          "type": "variable_if",
          "name": "no_insert_mode",
          "value": 1
        }
      ]
    }
  ]
}