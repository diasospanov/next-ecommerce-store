-- Create a table
CREATE TABLE collection (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  description varchar(500) NOT NULL,
  price varchar(10) NOT NULL
  );


 -- Insert data
 INSERT INTO collection
  (name, description, price)
VALUES
  (
    'NFT-1',
    'This is a template NFT description. Subject to a change at a later store development stage.',
    150000
  ),
  (
    'NFT-2',
    'This is a template NFT description. Subject to a change at a later store development stage.',
    140000
  ),
  (
    'NFT-3',
    'This is a template NFT description. Subject to a change at a later store development stage.',
    130000
  ),
  (
    'NFT-4',
    'This is a template NFT description. Subject to a change at a later store development stage.',
    120000
  ),
  (
    'NFT-5',
    'This is a template NFT description. Subject to a change at a later store development stage.',
    110000
  ),
  (
    'NFT-6',
    'This is a template NFT description. Subject to a change at a later store development stage.',
    150000
  );

-- ('Dodo',  'turtle',  'scope'),
--   ('Paco',  'dog',  'jacket'),
--   ('Tira',  'cat',  'glasses'),
--   ('Danny',  'guineapig',  'zylinder'),
--   ('Karl',  'llama',  'hat');
