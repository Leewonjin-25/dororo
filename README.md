<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>마크다운 뷰어</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap"
        rel="stylesheet">
    <!-- Marked.js for Markdown parsing -->
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <!-- Highlight.js for code syntax highlighting -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #F5EFE7;
            color: #3E2723;
            line-height: 1.6;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem;
        }

        .header {
            background: white;
            padding: 2rem;
            border-radius: 16px;
            margin-bottom: 2rem;
            box-shadow: 0 2px 10px rgba(62, 39, 35, 0.1);
        }

        .header h1 {
            font-size: 2rem;
            color: #A67C52;
            margin-bottom: 1rem;
        }

        .file-input-wrapper {
            display: flex;
            gap: 1rem;
            align-items: center;
            flex-wrap: wrap;
        }

        .file-input-label {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            background: linear-gradient(135deg, #C9A86A 0%, #A67C52 100%);
            color: white;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(201, 168, 106, 0.3);
        }

        .file-input-label:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(201, 168, 106, 0.4);
        }

        #fileInput {
            display: none;
        }

        .file-name {
            color: #6D4C41;
            font-size: 0.9rem;
        }

        .content {
            background: white;
            padding: 3rem;
            border-radius: 16px;
            box-shadow: 0 2px 10px rgba(62, 39, 35, 0.1);
            min-height: 400px;
        }

        .placeholder {
            text-align: center;
            padding: 4rem 2rem;
            color: #8D6E63;
        }

        .placeholder svg {
            width: 80px;
            height: 80px;
            margin-bottom: 1rem;
            opacity: 0.5;
        }

        /* Markdown Styles */
        #markdown-content h1 {
            font-size: 2.5rem;
            color: #3E2723;
            margin: 2rem 0 1rem 0;
            padding-bottom: 0.5rem;
            border-bottom: 3px solid #C9A86A;
        }

        #markdown-content h2 {
            font-size: 2rem;
            color: #3E2723;
            margin: 1.5rem 0 1rem 0;
            padding-bottom: 0.3rem;
            border-bottom: 2px solid #D4A574;
        }

        #markdown-content h3 {
            font-size: 1.5rem;
            color: #6D4C41;
            margin: 1.5rem 0 0.75rem 0;
        }

        #markdown-content h4 {
            font-size: 1.2rem;
            color: #6D4C41;
            margin: 1rem 0 0.5rem 0;
        }

        #markdown-content p {
            margin: 1rem 0;
            line-height: 1.8;
        }

        #markdown-content ul,
        #markdown-content ol {
            margin: 1rem 0;
            padding-left: 2rem;
        }

        #markdown-content li {
            margin: 0.5rem 0;
        }

        #markdown-content code {
            background: rgba(201, 168, 106, 0.1);
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
            color: #A67C52;
        }

        #markdown-content pre {
            background: #2d2d2d;
            padding: 1.5rem;
            border-radius: 8px;
            overflow-x: auto;
            margin: 1.5rem 0;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        #markdown-content pre code {
            background: none;
            padding: 0;
            color: #f8f8f2;
            font-size: 0.95em;
        }

        #markdown-content blockquote {
            border-left: 4px solid #C9A86A;
            padding-left: 1.5rem;
            margin: 1.5rem 0;
            color: #6D4C41;
            font-style: italic;
            background: rgba(201, 168, 106, 0.05);
            padding: 1rem 1.5rem;
            border-radius: 0 8px 8px 0;
        }

        #markdown-content table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
        }

        #markdown-content table th,
        #markdown-content table td {
            padding: 0.75rem;
            border: 1px solid rgba(62, 39, 35, 0.1);
            text-align: left;
        }

        #markdown-content table th {
            background: rgba(201, 168, 106, 0.1);
            font-weight: 600;
            color: #A67C52;
        }

        #markdown-content table tr:nth-child(even) {
            background: rgba(62, 39, 35, 0.02);
        }

        #markdown-content a {
            color: #C9A86A;
            text-decoration: none;
            border-bottom: 1px solid transparent;
            transition: border-color 0.3s ease;
        }

        #markdown-content a:hover {
            border-bottom-color: #C9A86A;
        }

        #markdown-content img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 1rem 0;
        }

        #markdown-content hr {
            border: none;
            border-top: 2px solid rgba(201, 168, 106, 0.2);
            margin: 2rem 0;
        }

        #markdown-content strong {
            color: #3E2723;
            font-weight: 700;
        }

        #markdown-content em {
            color: #6D4C41;
        }

        /* Loading animation */
        .loading {
            text-align: center;
            padding: 2rem;
        }

        .loading::after {
            content: '...';
            animation: dots 1.5s steps(4, end) infinite;
        }

        @keyframes dots {

            0%,
            20% {
                content: '.';
            }

            40% {
                content: '..';
            }

            60%,
            100% {
                content: '...';
            }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .container {
                padding: 1rem;
            }

            .content {
                padding: 1.5rem;
            }

            #markdown-content h1 {
                font-size: 1.8rem;
            }

            #markdown-content h2 {
                font-size: 1.5rem;
            }

            #markdown-content pre {
                padding: 1rem;
                font-size: 0.85rem;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>📄 마크다운 뷰어</h1>
            <div class="file-input-wrapper">
                <label for="fileInput" class="file-input-label">
                    📁 MD 파일 선택
                </label>
                <input type="file" id="fileInput" accept=".md,.markdown">
                <span class="file-name" id="fileName">파일을 선택해주세요</span>
            </div>
        </div>

        <div class="content">
            <div class="placeholder" id="placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <p>마크다운 파일을 선택하면 여기에 렌더링됩니다</p>
            </div>
            <div id="markdown-content" style="display: none;"></div>
        </div>
    </div>

    <script>
        const fileInput = document.getElementById('fileInput');
        const fileName = document.getElementById('fileName');
        const placeholder = document.getElementById('placeholder');
        const markdownContent = document.getElementById('markdown-content');

        // Configure marked options
        marked.setOptions({
            highlight: function (code, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return hljs.highlight(code, { language: lang }).value;
                    } catch (err) { }
                }
                return hljs.highlightAuto(code).value;
            },
            breaks: true,
            gfm: true
        });

        fileInput.addEventListener('change', function (e) {
            const file = e.target.files[0];

            if (!file) {
                return;
            }

            // Update file name display
            fileName.textContent = file.name;

            // Show loading
            placeholder.style.display = 'none';
            markdownContent.style.display = 'block';
            markdownContent.innerHTML = '<div class="loading">파일을 읽는 중</div>';

            // Read file
            const reader = new FileReader();

            reader.onload = function (event) {
                const markdownText = event.target.result;

                // Convert markdown to HTML
                const html = marked.parse(markdownText);

                // Display rendered HTML
                markdownContent.innerHTML = html;

                // Highlight code blocks
                markdownContent.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightElement(block);
                });
            };

            reader.onerror = function () {
                markdownContent.innerHTML = '<div style="color: #D84315; text-align: center; padding: 2rem;">파일을 읽는 중 오류가 발생했습니다.</div>';
            };

            reader.readAsText(file);
        });

        // Drag and drop support
        const container = document.querySelector('.content');

        container.addEventListener('dragover', function (e) {
            e.preventDefault();
            container.style.background = 'rgba(201, 168, 106, 0.05)';
        });

        container.addEventListener('dragleave', function (e) {
            container.style.background = 'white';
        });

        container.addEventListener('drop', function (e) {
            e.preventDefault();
            container.style.background = 'white';

            const file = e.dataTransfer.files[0];

            if (file && (file.name.endsWith('.md') || file.name.endsWith('.markdown'))) {
                // Trigger file input change
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                fileInput.files = dataTransfer.files;

                // Manually trigger change event
                const event = new Event('change', { bubbles: true });
                fileInput.dispatchEvent(event);
            } else {
                alert('MD 파일만 업로드할 수 있습니다.');
            }
        });
    </script>
</body>

</html>
