CREATE TABLE auctions (
    id              SERIAL PRIMARY KEY,
    collection_name TEXT                    NOT NULL,
    token_id        TEXT                    NOT NULL,
    chain           TEXT                    NOT NULL
);

CREATE TABLE collections (
    id              SERIAL PRIMARY KEY,
    name            TEXT                    NOT NULL,
    chain           TEXT                    NOT NULL
);

INSERT INTO collections
(
    id, name, chain
)
VALUES
    (DEFAULT, 'Bored Ape Yacht Club', 'Ethereum'),
    (DEFAULT, 'Okay Bears', 'Solana');