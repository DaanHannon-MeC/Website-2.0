---
name: brand-guidelines
description: Applies ZEGET'IS official brand colors and typography to any sort of artifact that may benefit from having ZEGET'IS look-and-feel. Use it when brand colors or style guidelines, visual formatting, or company design standards apply.
license: Complete terms in LICENSE.txt
---

# ZEGET'IS Brand Styling

## Overview

To access ZEGET'IS official brand identity and style resources, use this skill.

**Keywords**: branding, corporate identity, visual identity, post-processing, styling, brand colors, typography, ZEGET'IS brand, visual formatting, visual design, cinematic, luxury, editorial

## Brand Guidelines

### Colors

**Main Colors:**

- Deep Black: `#0a0a0a` - Primary backgrounds and dark elements
- Pure White: `#ffffff` - Light backgrounds and text on dark
- Warm Gray: `#2a2a2a` - Secondary backgrounds
- Light Gray: `#f5f5f5` - Subtle backgrounds and borders

**Accent Colors:**

- Bronze Gold: `#c9a063` - Primary accent, luxury highlights
- Warm Bronze: `#b8935f` - Secondary accent
- Deep Bronze: `#8b6f47` - Tertiary accent, subtle highlights

### Typography

- **Headings**: Serif font (elegant, editorial style - similar to Playfair Display, Cormorant, or Times New Roman)
- **Body Text**: Sans-serif (clean, modern - similar to Inter, Helvetica, or Arial)
- **Logo**: Custom serif typeface "ZEGET'IS"
- **Note**: Use elegant serif fonts for headings to match the cinematic, luxury aesthetic

## Features

### Smart Font Application

- Applies Poppins font to headings (24pt and larger)
- Applies Lora font to body text
- Automatically falls back to Arial/Georgia if custom fonts unavailable
- Preserves readability across all systems

### Text Styling

- Headings (24pt+): Poppins font
- Body text: Lora font
- Smart color selection based on background
- Preserves text hierarchy and formatting

### Shape and Accent Colors

- Non-text shapes use accent colors
- Cycles through orange, blue, and green accents
- Maintains visual interest while staying on-brand

## Technical Details

### Font Management

- Uses system-installed Poppins and Lora fonts when available
- Provides automatic fallback to Arial (headings) and Georgia (body)
- No font installation required - works with existing system fonts
- For best results, pre-install Poppins and Lora fonts in your environment

### Color Application

- Uses RGB color values for precise brand matching
- Applied via python-pptx's RGBColor class
- Maintains color fidelity across different systems
