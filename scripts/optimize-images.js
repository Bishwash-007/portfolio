import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const projectsDir = path.join(process.cwd(), 'public', 'projects');

// Ensure the projects directory exists
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// Default image dimensions
const dimensions = {
  width: 1200,
  height: 800,
  fit: 'cover'
};

// Optimize a single image
async function optimizeImage(inputPath, outputPath) {
  try {
    if (!fs.existsSync(inputPath)) {
      console.error(`✗ Input file not found: ${inputPath}`);
      return false;
    }

    await sharp(inputPath)
      .resize(dimensions.width, dimensions.height, {
        fit: dimensions.fit,
        position: 'center'
      })
      .webp({ quality: 90 })
      .toFile(outputPath);
    console.log(`✓ Optimized: ${path.basename(outputPath)}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to optimize: ${path.basename(outputPath)}`, error);
    return false;
  }
}

// Create a default image
async function createDefaultImage() {
  const defaultImage = path.join(projectsDir, 'default.webp');
  if (!fs.existsSync(defaultImage)) {
    try {
      const svg = `
        <svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#2a2a2a;stop-opacity:1" />
            </linearGradient>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad)"/>
          <rect width="100%" height="100%" fill="url(#grid)"/>
          <g transform="translate(600,400)">
            <circle cx="0" cy="0" r="100" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.2"/>
            <path d="M-50,-50 L50,50 M-50,50 L50,-50" stroke="#ffffff" stroke-width="2" opacity="0.2"/>
          </g>
          <text x="50%" y="50%" font-family="Arial" font-size="48" fill="#ffffff" text-anchor="middle" dy=".3em" opacity="0.6">Project Image</text>
        </svg>
      `;
      await sharp(Buffer.from(svg))
        .resize(dimensions.width, dimensions.height)
        .webp({ quality: 90 })
        .toFile(defaultImage);
      console.log('✓ Created default image');
    } catch (error) {
      console.error('✗ Failed to create default image:', error);
      process.exit(1);
    }
  }
}

// Main function
async function main() {
  try {
    await createDefaultImage();
    
    // Add your project images here
    const projects = [
      { name: 'restate', input: path.join(process.cwd(), 'assets', 'projects', 'restate.png') },
      { name: 'rubik3d', input: path.join(process.cwd(), 'assets', 'projects', 'rubik3d.png') },
      { name: 'farmbuddy', input: path.join(process.cwd(), 'assets', 'projects', 'farmbuddy.png') },
      { name: 'subtrack', input: path.join(process.cwd(), 'assets', 'projects', 'subtrack.png') },
      { name: 'bookhive', input: path.join(process.cwd(), 'assets', 'projects', 'bookhive.png') }
    ];

    let successCount = 0;
    for (const project of projects) {
      const outputPath = path.join(projectsDir, `${project.name}.webp`);
      const success = await optimizeImage(project.input, outputPath);
      if (success) successCount++;
    }

    console.log(`\nOptimization complete: ${successCount}/${projects.length} images processed successfully`);
    if (successCount < projects.length) {
      console.log('Some images failed to process. Please check the error messages above.');
    }
  } catch (error) {
    console.error('✗ Script failed:', error);
    process.exit(1);
  }
}

main().catch(console.error); 