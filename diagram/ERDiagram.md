```mermaid
erDiagram
    User{
        INT id PK
        VARCHAR name
        VARCHAR account
        VARCHAR email
        VARCHAR password
        VARCHAR avatar
        PROVIDER provider
    }

    Activity {
        INT id PK
        INT userId FK
        VARCHAR title
        LONGTEXT content
        CHOICE choice
        BOOL viewable
        DATE start
        DATE end
    }

    Media{
        INT userId FK
        LONGBLOB content
        VARCHAR name
        VARCHAR hash
    }

    Item{
        INT id PK
        INT activityId FK
        INT userId FK
        VARCHAR content
    }

    Vote{
        INT voterId FK
        INT creatorId FK
        INT activityId FK
        INT itemId FK
        DATETIME datetime
    }

    Message{
        INT id PK
        INT parentId
        INT activityId FK
        INT userId FK
        VARCHAR content
        DATETIME create
        DATETIME lastUpdate
    }


    User ||--o{ Activity : creates
    User ||--o{ Media : owns
    User ||--o{ Activity : creates
    User ||--o{ Vote : casts
    User ||--o{ Message : posts

    Activity ||--o{ Item : includes
    Activity ||--o{ Vote : has
    Activity ||--o{ Message : has

    Item ||--o{ Vote : receives

    Message ||--|| Message : replies
```
