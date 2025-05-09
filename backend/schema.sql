-- Table for user profiles
CREATE TABLE profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  address TEXT UNIQUE NOT NULL,
  username TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table for NFT records
CREATE TABLE nfts (
  id SERIAL PRIMARY KEY,
  owner_address TEXT NOT NULL,
  metadata_uri TEXT,
  minted_at TIMESTAMP DEFAULT NOW()
);
