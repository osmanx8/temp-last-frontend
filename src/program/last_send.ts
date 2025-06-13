/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/last_send.json`.
 */
export type LastSend = {
  "address": "AvNeVg8MYJVg6u3AcojMpFmMChHmHqsM4kTUvZhwTsw",
  "metadata": {
    "name": "lastSend",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "claim",
      "discriminator": [
        62,
        198,
        214,
        193,
        213,
        159,
        108,
        210
      ],
      "accounts": [
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  95,
                  83,
                  84,
                  65,
                  84,
                  69
                ]
              }
            ]
          }
        },
        {
          "name": "solVault",
          "docs": [
            "CHECK"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  86,
                  65,
                  85,
                  76,
                  84,
                  95,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "global_state.current_game_index",
                "account": "globalState"
              }
            ]
          }
        },
        {
          "name": "gameState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  65,
                  77,
                  69,
                  95,
                  83,
                  84,
                  65,
                  84,
                  69
                ]
              },
              {
                "kind": "account",
                "path": "global_state.current_game_index",
                "account": "globalState"
              }
            ]
          }
        },
        {
          "name": "nextSolVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  86,
                  65,
                  85,
                  76,
                  84,
                  95,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "global_state.total_count",
                "account": "globalState"
              }
            ]
          }
        },
        {
          "name": "lastSender",
          "writable": true
        },
        {
          "name": "secondSender",
          "writable": true
        },
        {
          "name": "thirdSender",
          "writable": true
        },
        {
          "name": "devWallet",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "createPool",
      "discriminator": [
        233,
        146,
        209,
        142,
        207,
        104,
        64,
        188
      ],
      "accounts": [
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  95,
                  83,
                  84,
                  65,
                  84,
                  69
                ]
              }
            ]
          }
        },
        {
          "name": "gameState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  65,
                  77,
                  69,
                  95,
                  83,
                  84,
                  65,
                  84,
                  69
                ]
              },
              {
                "kind": "account",
                "path": "global_state.total_count",
                "account": "globalState"
              }
            ]
          }
        },
        {
          "name": "solVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  86,
                  65,
                  85,
                  76,
                  84,
                  95,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "global_state.total_count",
                "account": "globalState"
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "timeDurationAsSec",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  95,
                  83,
                  84,
                  65,
                  84,
                  69
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "stakeSol",
      "discriminator": [
        200,
        38,
        157,
        155,
        245,
        57,
        236,
        168
      ],
      "accounts": [
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  95,
                  83,
                  84,
                  65,
                  84,
                  69
                ]
              }
            ]
          }
        },
        {
          "name": "solVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  86,
                  65,
                  85,
                  76,
                  84,
                  95,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "arg",
                "path": "gameId"
              }
            ]
          }
        },
        {
          "name": "gameState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  65,
                  77,
                  69,
                  95,
                  83,
                  84,
                  65,
                  84,
                  69
                ]
              },
              {
                "kind": "arg",
                "path": "gameId"
              }
            ]
          }
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "gameId",
          "type": "u64"
        },
        {
          "name": "solAmount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "gameState",
      "discriminator": [
        144,
        94,
        208,
        172,
        248,
        99,
        134,
        120
      ]
    },
    {
      "name": "globalState",
      "discriminator": [
        163,
        46,
        74,
        168,
        216,
        123,
        133,
        98
      ]
    }
  ],
  "events": [
    {
      "name": "claimEvent",
      "discriminator": [
        93,
        15,
        70,
        170,
        48,
        140,
        212,
        219
      ]
    },
    {
      "name": "createPoolEvent",
      "discriminator": [
        177,
        49,
        12,
        210,
        160,
        118,
        167,
        116
      ]
    },
    {
      "name": "initializedEvent",
      "discriminator": [
        136,
        202,
        63,
        120,
        152,
        146,
        41,
        79
      ]
    },
    {
      "name": "stakeSolEvent",
      "discriminator": [
        10,
        44,
        142,
        57,
        77,
        57,
        25,
        134
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "timeOverflow",
      "msg": "Invalid Time set"
    },
    {
      "code": 6001,
      "name": "poolIsNotClaimed",
      "msg": "Former pool is not ready to be claimed"
    },
    {
      "code": 6002,
      "name": "invalidLastsender",
      "msg": "Invalid last sender"
    },
    {
      "code": 6003,
      "name": "invalidSecondsender",
      "msg": "Invalid second sender"
    },
    {
      "code": 6004,
      "name": "invalidThirdsender",
      "msg": "Invalid third sender"
    },
    {
      "code": 6005,
      "name": "invalidDeveloperWallet",
      "msg": "Invalid developer wallet"
    },
    {
      "code": 6006,
      "name": "alreadyClaimed",
      "msg": "Pot already claimed"
    },
    {
      "code": 6007,
      "name": "alreadyInitialized",
      "msg": "Already initialized"
    },
    {
      "code": 6008,
      "name": "amountOverflow",
      "msg": "Staking sol amount is invalid"
    },
    {
      "code": 6009,
      "name": "overSolLockAmount",
      "msg": "Staking sol amount is bigger than maximum"
    },
    {
      "code": 6010,
      "name": "feeOverflow",
      "msg": "Invalid fee percent"
    },
    {
      "code": 6011,
      "name": "gameEnded",
      "msg": "Game ended and ready to be claimed"
    },
    {
      "code": 6012,
      "name": "invalidId",
      "msg": "Invalid game ID"
    },
    {
      "code": 6013,
      "name": "notClaimMoment",
      "msg": "Not relasing time yet"
    },
    {
      "code": 6014,
      "name": "invalidAdmin",
      "msg": "Incorrect Admin"
    },
    {
      "code": 6015,
      "name": "invalidFeePercent",
      "msg": "Invalid fee percent"
    },
    {
      "code": 6016,
      "name": "noSenderError",
      "msg": "No sender yet"
    },
    {
      "code": 6017,
      "name": "invalidAmountError",
      "msg": "Invalid SOL amount"
    }
  ],
  "types": [
    {
      "name": "claimEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gameId",
            "type": "u64"
          },
          {
            "name": "isClaimed",
            "type": "bool"
          },
          {
            "name": "isPoolOpen",
            "type": "bool"
          },
          {
            "name": "lastSender",
            "type": "pubkey"
          },
          {
            "name": "secondSender",
            "type": "pubkey"
          },
          {
            "name": "thirdSender",
            "type": "pubkey"
          },
          {
            "name": "nextValutRewardPropotion",
            "type": "u64"
          },
          {
            "name": "claimedTime",
            "type": "u64"
          },
          {
            "name": "lastSenderLamports",
            "type": "u64"
          },
          {
            "name": "secondSenderLamports",
            "type": "u64"
          },
          {
            "name": "thirdSenderLamports",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "createPoolEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gameId",
            "type": "u64"
          },
          {
            "name": "solFromGameBefore",
            "type": "u64"
          },
          {
            "name": "gameTimeDuration",
            "type": "u64"
          },
          {
            "name": "isPoolOpen",
            "type": "bool"
          },
          {
            "name": "isClaimed",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "gameState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gameId",
            "type": "u64"
          },
          {
            "name": "lastSender",
            "type": "pubkey"
          },
          {
            "name": "secondSender",
            "type": "pubkey"
          },
          {
            "name": "thirdSender",
            "type": "pubkey"
          },
          {
            "name": "atStartTime",
            "type": "i64"
          },
          {
            "name": "potBalance",
            "type": "u64"
          },
          {
            "name": "developerWallet",
            "type": "pubkey"
          },
          {
            "name": "timeDuration",
            "type": "u64"
          },
          {
            "name": "claimed",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "initialized",
            "type": "u32"
          },
          {
            "name": "developerWallet",
            "type": "pubkey"
          },
          {
            "name": "minEntry",
            "type": "u64"
          },
          {
            "name": "timerDurationMax",
            "type": "u64"
          },
          {
            "name": "timerDurationMin",
            "type": "u64"
          },
          {
            "name": "developerRewardPercent",
            "type": "u64"
          },
          {
            "name": "nextVaultRewardPercent",
            "type": "u64"
          },
          {
            "name": "lastSenderRewardPercent",
            "type": "u32"
          },
          {
            "name": "secondSenderRewardPercent",
            "type": "u32"
          },
          {
            "name": "thirdSenderRewardPercent",
            "type": "u32"
          },
          {
            "name": "isPoolOpen",
            "type": "bool"
          },
          {
            "name": "totalCount",
            "type": "u64"
          },
          {
            "name": "currentGameIndex",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "initializedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "developerWallet",
            "type": "pubkey"
          },
          {
            "name": "minEntry",
            "type": "u64"
          },
          {
            "name": "timerDurationMax",
            "type": "u64"
          },
          {
            "name": "timerDurationMin",
            "type": "u64"
          },
          {
            "name": "developerRewardPercent",
            "type": "u64"
          },
          {
            "name": "lastSenderRewardPercent",
            "type": "u32"
          },
          {
            "name": "secondSenderRewardPercent",
            "type": "u32"
          },
          {
            "name": "thirdSenderRewardPercent",
            "type": "u32"
          },
          {
            "name": "nextGameRewardPercent",
            "type": "u64"
          },
          {
            "name": "totalGameCount",
            "type": "u64"
          },
          {
            "name": "isPoolOpen",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "stakeSolEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "gameId",
            "type": "u64"
          },
          {
            "name": "stakeSol",
            "type": "u64"
          },
          {
            "name": "potBalance",
            "type": "u64"
          },
          {
            "name": "lastSender",
            "type": "pubkey"
          },
          {
            "name": "secondSender",
            "type": "pubkey"
          },
          {
            "name": "thirdSender",
            "type": "pubkey"
          },
          {
            "name": "atStartTime",
            "type": "i64"
          },
          {
            "name": "timeDuration",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
