-- Supabase schema
create table if not exists memberships (
    id uuid primary key default uuid_generate_v4(),
    wallet_address text not null,
    tier text not null,
    start_date timestamp default now(),
    end_date timestamp
);
