/*
  # Create products table for World Sports store

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text) - Product name
      - `description` (text) - Product description
      - `price` (numeric) - Product price
      - `category` (text) - Product category (e.g., 'futebol', 'basquete', 'corrida')
      - `image_url` (text) - Product image URL
      - `stock` (integer) - Available stock quantity
      - `featured` (boolean) - Whether product is featured on homepage
      - `created_at` (timestamptz) - Creation timestamp
  
  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access (allows anyone to view products)
    - Admin writes would be handled separately
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL CHECK (price >= 0),
  category text NOT NULL,
  image_url text NOT NULL,
  stock integer NOT NULL DEFAULT 0 CHECK (stock >= 0),
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON products
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert sample products for World Sports
INSERT INTO products (name, description, price, category, image_url, stock, featured) VALUES
  ('Bola Nike Premier League', 'Bola oficial de futebol Nike Premier League 2024', 199.90, 'futebol', 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg', 50, true),
  ('Chuteira Nike Mercurial', 'Chuteira de campo Nike Mercurial Vapor com tecnologia de ponta', 599.90, 'futebol', 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg', 30, true),
  ('Tênis Adidas Ultraboost', 'Tênis de corrida Adidas Ultraboost com máximo conforto', 799.90, 'corrida', 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg', 40, true),
  ('Bola de Basquete Spalding', 'Bola oficial de basquete Spalding NBA', 249.90, 'basquete', 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg', 35, true),
  ('Camisa de Treino Nike Dri-FIT', 'Camisa esportiva Nike com tecnologia Dri-FIT', 149.90, 'vestuario', 'https://images.pexels.com/photos/8844886/pexels-photo-8844886.jpeg', 100, false),
  ('Luvas de Goleiro Adidas Predator', 'Luvas profissionais Adidas Predator com grip máximo', 299.90, 'futebol', 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg', 25, false),
  ('Tênis Nike Air Zoom Pegasus', 'Tênis de corrida Nike Air Zoom Pegasus 40', 699.90, 'corrida', 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg', 45, true),
  ('Kit de Musculação Completo', 'Kit completo com halteres, anilhas e barra', 899.90, 'fitness', 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg', 15, false),
  ('Raquete de Tênis Wilson', 'Raquete profissional Wilson Pro Staff', 1299.90, 'tenis', 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg', 20, false),
  ('Mochila Esportiva Nike', 'Mochila esportiva Nike com compartimento para notebook', 249.90, 'acessorios', 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg', 60, false),
  ('Short de Futebol Adidas', 'Short de futebol Adidas respirável', 89.90, 'vestuario', 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg', 80, false),
  ('Garrafa Térmica Sport', 'Garrafa térmica de 1L para esportes', 79.90, 'acessorios', 'https://images.pexels.com/photos/4792/food-drink-glass-drinking.jpg', 150, false);
