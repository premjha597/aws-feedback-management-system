                    AWS Serverless Feedback Management System

                 +----------------------+
                 |       User           |
                 +----------+-----------+
                            |
                          HTTPS
                            |
                            v
                 +----------------------+
                 |   Amazon CloudFront  |
                 |   (Global CDN)       |
                 +----------+-----------+
                            |
                            v
                 +----------------------+
                 |      Amazon S3       |
                 |  Static Website      |
                 +----------+-----------+
                            |
                   POST Request (HTTPS)
                            |
                            v
                 +----------------------+
                 |   Amazon API Gateway |
                 +----------+-----------+
                            |
                       Invoke Lambda
                            |
                            v
                 +----------------------+
                 |     AWS Lambda       |
                 | Business Logic       |
                 +----------+-----------+
                            |
                      Store Feedback
                            |
                            v
                 +----------------------+
                 |   Amazon DynamoDB    |
                 |    NoSQL Database    |
                 +----------------------+





                 A fully serverless feedback management application built on AWS using Amazon S3, CloudFront, API Gateway, Lambda, and DynamoDB.
