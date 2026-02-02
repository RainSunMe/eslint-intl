#!/bin/bash

# ESLint Intl Documentation Quick Start

echo "🚀 ESLint Intl Documentation Setup"
echo "===================================="
echo ""

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "📚 Available commands:"
echo "  npm run docs:dev      - Start development server (http://localhost:5173)"
echo "  npm run docs:build    - Build for production"
echo "  npm run docs:preview  - Preview production build locally"
echo ""
echo "🎯 To start developing documentation:"
echo "  npm run docs:dev"
echo ""
echo "📖 Documentation is located in:"
echo "  docs/index.md          - Home page"
echo "  docs/guide/*.md        - Guide pages"
echo ""
echo "🌐 For deployment options, see:"
echo "  DOCS_DEPLOYMENT_GUIDE.md"
echo ""
