name: Deploy

on:
  push:
    branches:
      - main

env:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16.x'
      - name: Install dependencies
        run: npm install
      - name: Build site
        run: npm run build
      - name: Configure Git
        run: |
          git config --global user.email "leviwheeling8@gmail.com"
          git config --global user.name "leviwheeling"
      - name: Deploy site
        uses: JamesIves/github-pages-deploy-action@4.1.1
        with:
          branch: main
          folder: public
