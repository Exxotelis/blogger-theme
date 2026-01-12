# Blogger Theme - GitHub Deployment Script
# Run this script to prepare and deploy your theme to GitHub Pages

Write-Host "🚀 Blogger Theme - GitHub Deployment Helper" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Copy assets to public folder
Write-Host "📦 Step 1: Copying assets to public folder..." -ForegroundColor Yellow

if (Test-Path "src\css\main.css") {
    Copy-Item "src\css\main.css" -Destination "public\assets\main.css" -Force
    Write-Host "✅ Copied main.css" -ForegroundColor Green
} else {
    Write-Host "❌ Error: src\css\main.css not found!" -ForegroundColor Red
    exit 1
}

if (Test-Path "src\js\main.js") {
    Copy-Item "src\js\main.js" -Destination "public\assets\main.js" -Force
    Write-Host "✅ Copied main.js" -ForegroundColor Green
} else {
    Write-Host "❌ Error: src\js\main.js not found!" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Step 2: Check Git status
Write-Host "📊 Step 2: Checking Git status..." -ForegroundColor Yellow

if (!(Test-Path ".git")) {
    Write-Host "⚠️  Git repository not initialized!" -ForegroundColor Yellow
    $initGit = Read-Host "Do you want to initialize Git? (Y/N)"
    
    if ($initGit -eq "Y" -or $initGit -eq "y") {
        git init
        Write-Host "✅ Git initialized" -ForegroundColor Green
    } else {
        Write-Host "❌ Skipping Git initialization" -ForegroundColor Red
        exit 0
    }
}

Write-Host ""

# Step 3: Git operations
Write-Host "📝 Step 3: Git operations..." -ForegroundColor Yellow

# Ask for GitHub username
$username = Read-Host "Enter your GitHub username"
$repoName = Read-Host "Enter repository name (default: blogger-theme-vorintwo)"

if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "blogger-theme-vorintwo"
}

Write-Host ""
Write-Host "Repository will be: https://github.com/$username/$repoName" -ForegroundColor Cyan
Write-Host ""

# Check if remote exists
$remoteExists = git remote get-url origin 2>$null

if ($remoteExists) {
    Write-Host "✅ Remote 'origin' already configured: $remoteExists" -ForegroundColor Green
} else {
    $remoteUrl = "https://github.com/$username/$repoName.git"
    git remote add origin $remoteUrl
    Write-Host "✅ Remote 'origin' added: $remoteUrl" -ForegroundColor Green
}

Write-Host ""

# Step 4: Commit and push
Write-Host "📤 Step 4: Preparing commit..." -ForegroundColor Yellow

git add .
$commitMessage = Read-Host "Enter commit message (default: 'Deploy: Update assets v1.0.0')"

if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Deploy: Update assets v1.0.0"
}

git commit -m $commitMessage

Write-Host ""
Write-Host "🔄 Pushing to GitHub..." -ForegroundColor Yellow

$branch = git rev-parse --abbrev-ref HEAD

if ($branch -ne "main" -and $branch -ne "master") {
    git branch -M main
    $branch = "main"
}

git push -u origin $branch

Write-Host "✅ Pushed to GitHub!" -ForegroundColor Green
Write-Host ""

# Step 5: Display URLs
Write-Host "🌐 Step 5: Your GitHub Pages URLs" -ForegroundColor Yellow
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Repository: https://github.com/$username/$repoName" -ForegroundColor White
Write-Host "Pages Site: https://$username.github.io/$repoName/public/" -ForegroundColor White
Write-Host ""
Write-Host "CSS URL:" -ForegroundColor Cyan
Write-Host "https://$username.github.io/$repoName/public/assets/main.css?v=1.0.0" -ForegroundColor Green
Write-Host ""
Write-Host "JS URL:" -ForegroundColor Cyan
Write-Host "https://$username.github.io/$repoName/public/assets/main.js?v=1.0.0" -ForegroundColor Green
Write-Host ""

# Step 6: Instructions
Write-Host "📋 Next Steps:" -ForegroundColor Yellow
Write-Host "=============" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Go to: https://github.com/$username/$repoName/settings/pages" -ForegroundColor White
Write-Host "2. Under 'Build and deployment':" -ForegroundColor White
Write-Host "   - Source: Deploy from a branch" -ForegroundColor Gray
Write-Host "   - Branch: main" -ForegroundColor Gray
Write-Host "   - Folder: / (root)" -ForegroundColor Gray
Write-Host "3. Click 'Save'" -ForegroundColor White
Write-Host "4. Wait 1-2 minutes for deployment" -ForegroundColor White
Write-Host "5. Update theme/theme-cdn.xml with the URLs above" -ForegroundColor White
Write-Host "6. Replace 'YOUR_USERNAME' with '$username'" -ForegroundColor White
Write-Host ""

# Step 7: Open browser
$openBrowser = Read-Host "Open GitHub repository in browser? (Y/N)"

if ($openBrowser -eq "Y" -or $openBrowser -eq "y") {
    Start-Process "https://github.com/$username/$repoName"
    Start-Process "https://github.com/$username/$repoName/settings/pages"
}

Write-Host ""
Write-Host "✨ Deployment preparation complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📚 For more info, see GITHUB-DEPLOYMENT.md" -ForegroundColor Cyan
Write-Host ""

# Save URLs to a file for reference
$urlsContent = @"
# GitHub Pages URLs - Generated $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")

Repository: https://github.com/$username/$repoName
Pages Site: https://$username.github.io/$repoName/public/
Settings: https://github.com/$username/$repoName/settings/pages

## Assets

CSS: https://$username.github.io/$repoName/public/assets/main.css?v=1.0.0
JS: https://$username.github.io/$repoName/public/assets/main.js?v=1.0.0

## jsDelivr CDN (Alternative)

CSS: https://cdn.jsdelivr.net/gh/$username/$repoName@main/public/assets/main.css
JS: https://cdn.jsdelivr.net/gh/$username/$repoName@main/public/assets/main.js

## Theme XML

Edit theme/theme-cdn.xml and replace:
- YOUR_USERNAME → $username
- REPO_NAME → $repoName (if different from default)

## Update Checklist

- [ ] Enable GitHub Pages in repository settings
- [ ] Wait for first deployment (1-2 minutes)
- [ ] Test URLs in browser
- [ ] Update theme-cdn.xml with actual URLs
- [ ] Upload to Blogger: Theme → Edit HTML → Paste XML
- [ ] Test on Blogger preview
- [ ] Publish theme

## Cache Busting

When updating assets, change version:
?v=1.0.0 → ?v=1.0.1

"@

$urlsContent | Out-File -FilePath "DEPLOYMENT-URLS.txt" -Encoding UTF8
Write-Host "💾 URLs saved to: DEPLOYMENT-URLS.txt" -ForegroundColor Cyan
Write-Host ""
