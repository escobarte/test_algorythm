#!/bin/bash

# ─────────────────────────────────────────
# Шаг 1 — Проверка / установка Node.js
# ─────────────────────────────────────────
if command -v node &>/dev/null; then
  echo "✅ Node.js уже установлен: $(node -v)"
else
  echo "⏳ Node.js не найден. Устанавливаю через nvm..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  source "$NVM_DIR/nvm.sh"
  nvm install 20
  nvm use 20
  echo "✅ Node.js установлен: $(node -v)"
fi

# ─────────────────────────────────────────
# Шаг 2 — Создание проекта Next.js 14
# ─────────────────────────────────────────
echo ""
echo "⏳ Создаю проект Next.js 14..."

# Убран --no-import-alias, добавлен стандартный алиас для совместимости с shadcn
npx -y create-next-app@14 my-project \
  --typescript \
  --eslint \
  --tailwind \
  --src-dir \
  --app \
  --import-alias "@/*"

echo "✅ Проект создан!"

# ─────────────────────────────────────────
# Шаг 3 — Переход в папку проекта
# ─────────────────────────────────────────
cd my-project || { echo "❌ Папка my-project не найдена"; exit 1; }

# ─────────────────────────────────────────
# Шаг 4 — Установка библиотек и настройка
# ─────────────────────────────────────────
echo ""
echo "⏳ Устанавливаю framer-motion и react-hook-form..."
npm install framer-motion react-hook-form

echo "⏳ Инициализирую shadcn/ui (с дефолтными настройками)..."
# Флаг -d инициализирует shadcn с настройками по умолчанию (New York стиль, Zinc цвет)
npx shadcn@latest init -d

# ─────────────────────────────────────────
# Шаг 5 — Создание «Конституции» для Клода
# ─────────────────────────────────────────
echo "⏳ Создаю файл CLAUDE.md..."
cat << 'EOF' > CLAUDE.md
# Инструкции для ИИ (Конституция проекта)
1. Все UI-компоненты берем из shadcn/ui.
2. Используем сетку 8pt и max-w-7xl для глобального layout.
3. Проверяй "воздух" и выравнивание по силовым линиям.
EOF

echo "✅ Базовая инфраструктура готова!"

# ─────────────────────────────────────────
echo ""
echo "🎉 Готово! Проект настроен по Фазе 1. Запуск:"
echo "   cd my-project && npm run dev"