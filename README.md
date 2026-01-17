# dororo
# 도로로 랜딩 페이지 - HTML 코드 문서

## 페이지 구조

### 1. 메타데이터 및 헤드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>도로로 - 도로 균열 보수 동아리</title>
    <meta name="description" content="도로 균열 보수 기술을 배우고 실천하는 교육 동아리 도로로입니다. 안전한 도로 환경을 만들어갑니다.">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&family=Outfit:wght@600;800&display=swap" rel="stylesheet">
</head>
```

**사용된 폰트:**
- Noto Sans KR (400, 500, 700, 900)
- Outfit (600, 800)

---

## 2. 내비게이션 바

### 구조
- 로고 (SVG 아이콘 + 텍스트)
- 메뉴 링크 (홈, 소개, 학습 목표, 퀴즈, 문의)
- 가입하기 버튼 (Notion 링크)

### 코드
```html
<nav class="navbar" id="navbar">
    <div class="nav-container">
        <!-- 로고 -->
        <div class="nav-logo">
            <svg class="logo-icon" viewBox="0 0 50 50" fill="none">
                <path d="M25 5L45 15V35L25 45L5 35V15L25 5Z" 
                      stroke="url(#logo-gradient)" stroke-width="3" fill="none"/>
                <path d="M15 20H35M15 25H35M15 30H35" 
                      stroke="url(#logo-gradient)" stroke-width="2.5" stroke-linecap="round"/>
                <defs>
                    <linearGradient id="logo-gradient" x1="5" y1="5" x2="45" y2="45">
                        <stop offset="0%" stop-color="#FF6B6B"/>
                        <stop offset="100%" stop-color="#FFD93D"/>
                    </linearGradient>
                </defs>
            </svg>
            <span class="logo-text">도로로</span>
        </div>
        
        <!-- 메뉴 링크 -->
        <ul class="nav-links">
            <li><a href="#home" class="nav-link active">홈</a></li>
            <li><a href="#about" class="nav-link">소개</a></li>
            <li><a href="#objectives" class="nav-link">학습 목표</a></li>
            <li><a href="#quiz" class="nav-link">퀴즈</a></li>
            <li><a href="#contact" class="nav-link">문의</a></li>
        </ul>
        
        <!-- 가입하기 버튼 -->
        <a href="https://courageous-halibut-239.notion.site/2eb771d6460080afb799fc699ef93977?pvs=105" 
           target="_blank" class="nav-cta-link">
            <button class="nav-cta">가입하기</button>
        </a>
    </div>
</nav>
```

---

## 3. 히어로 섹션

### 구성 요소
1. 배경 그라데이션 오브 (3개)
2. 메인 타이틀 및 설명
3. 액션 버튼 2개
4. 통계 정보

### 코드
```html
<section class="hero" id="home">
    <!-- 배경 효과 -->
    <div class="hero-background">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
    </div>
    
    <!-- 메인 콘텐츠 -->
    <div class="hero-content">
        <!-- 배지 -->
        <div class="hero-badge">
            <span class="badge-icon">🛣️</span>
            <span>안전한 도로를 만드는 우리</span>
        </div>
        
        <!-- 타이틀 -->
        <h1 class="hero-title">
            <span class="title-line">도로의 상처를</span>
            <span class="title-line gradient-text">치유하는 기술</span>
        </h1>
        
        <!-- 설명 -->
        <p class="hero-description">
            도로 균열 보수의 모든 것을 배우고 실천하는 교육 동아리입니다.<br>
            이론부터 실습까지, 함께 배우며 더 안전한 도로 환경을 만들어갑니다.
        </p>
        
        <!-- 버튼 -->
        <div class="hero-buttons">
            <a href="#quiz" class="btn-link">
                <button class="btn btn-primary">
                    <span>퀴즈 풀어보기</span>
                    <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 3L9 4L15 10L9 16L10 17L17 10L10 3Z"/>
                    </svg>
                </button>
            </a>
            <button class="btn btn-secondary">
                <svg class="btn-icon-left" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2ZM8 14V6L14 10L8 14Z"/>
                </svg>
                <span>우리의 성과</span>
            </button>
        </div>
        
        <!-- 통계 -->
        <div class="hero-stats">
            <div class="stat-item">
                <div class="stat-number">150+</div>
                <div class="stat-label">동아리 회원</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
                <div class="stat-number">50+</div>
                <div class="stat-label">보수 프로젝트</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
                <div class="stat-number">98%</div>
                <div class="stat-label">만족도</div>
            </div>
        </div>
    </div>
    
    <!-- 스크롤 인디케이터 -->
    <div class="scroll-indicator">
        <div class="scroll-mouse">
            <div class="scroll-wheel"></div>
        </div>
        <span class="scroll-text">스크롤하여 더 알아보기</span>
    </div>
</section>
```

---

## 4. 학습 목표 섹션

### 카드 1: 균열 진단 기술

```html
<section class="objectives" id="objectives">
    <div class="section-container">
        <div class="section-header">
            <span class="section-badge">학습 목표</span>
            <h2 class="section-title">무엇을 배우나요?</h2>
            <p class="section-description">
                도로로에서는 체계적인 커리큘럼을 통해 도로 균열 보수의 전문가로 성장할 수 있습니다.
            </p>
        </div>
        
        <div class="cards-grid">
            <!-- 카드 1 -->
            <div class="info-card card-1">
                <div class="card-glow"></div>
                <div class="card-icon">
                    <svg viewBox="0 0 60 60" fill="none">
                        <circle cx="30" cy="30" r="25" stroke="url(#gradient1)" 
                                stroke-width="2" fill="none" opacity="0.3"/>
                        <path d="M30 15V30L40 35" stroke="url(#gradient1)" 
                              stroke-width="3" stroke-linecap="round"/>
                        <circle cx="30" cy="30" r="3" fill="url(#gradient1)"/>
                        <defs>
                            <linearGradient id="gradient1" x1="15" y1="15" x2="45" y2="45">
                                <stop offset="0%" stop-color="#667EEA"/>
                                <stop offset="100%" stop-color="#764BA2"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <h3 class="card-title">균열 진단 기술</h3>
                <p class="card-description">
                    다양한 도로 균열 유형을 정확히 식별하고 분석하는 방법을 학습합니다. 
                    선형, 망상형, 블록형, 포트홀 등 각 균열의 특성과 원인을 이해합니다.
                </p>
                <ul class="card-features">
                    <li>
                        <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        <span>균열 유형 분류법</span>
                    </li>
                    <li>
                        <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        <span>심각도 평가 기준</span>
                    </li>
                    <li>
                        <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        <span>현장 조사 실습</span>
                    </li>
                </ul>
                <div class="card-footer">
                    <span class="card-duration">4주 과정</span>
                    <button class="card-button">
                        <span>자세히 보기</span>
                        <svg viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 3L9 4L15 10L9 16L10 17L17 10L10 3Z"/>
                        </svg>
                    </button>
                </div>
            </div>
```

### 카드 2: 보수 재료 및 공법

```html
            <!-- 카드 2 -->
            <div class="info-card card-2">
                <div class="card-glow"></div>
                <div class="card-icon">
                    <svg viewBox="0 0 60 60" fill="none">
                        <rect x="15" y="20" width="30" height="25" rx="2" 
                              stroke="url(#gradient2)" stroke-width="2" fill="none" opacity="0.3"/>
                        <path d="M20 30H40M20 35H40M25 25H35" 
                              stroke="url(#gradient2)" stroke-width="3" stroke-linecap="round"/>
                        <circle cx="30" cy="15" r="3" fill="url(#gradient2)"/>
                        <defs>
                            <linearGradient id="gradient2" x1="15" y1="15" x2="45" y2="45">
                                <stop offset="0%" stop-color="#F093FB"/>
                                <stop offset="100%" stop-color="#F5576C"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <h3 class="card-title">보수 재료 및 공법</h3>
                <p class="card-description">
                    최신 보수 재료의 특성과 적용 방법을 익히고, 상황에 맞는 최적의 공법을 선택하는 능력을 기릅니다. 
                    이론과 실습을 병행합니다.
                </p>
                <ul class="card-features">
                    <li>
                        <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        <span>아스팔트 보수 재료</span>
                    </li>
                    <li>
                        <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        <span>콘크리트 보수 기법</span>
                    </li>
                    <li>
                        <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        <span>실전 보수 프로젝트</span>
                    </li>
                </ul>
                <div class="card-footer">
                    <span class="card-duration">6주 과정</span>
                    <button class="card-button">
                        <span>자세히 보기</span>
                        <svg viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 3L9 4L15 10L9 16L10 17L17 10L10 3Z"/>
                        </svg>
                    </button>
                </div>
            </div>
```

### 카드 3: 안전 관리 및 품질 관리

```html
            <!-- 카드 3 -->
            <div class="info-card card-3">
                <div class="card-glow"></div>
                <div class="card-icon">
                    <svg viewBox="0 0 60 60" fill="none">
                        <path d="M30 10L15 18V28C15 38 22 44 30 48C38 44 45 38 45 28V18L30 10Z" 
                              stroke="url(#gradient3)" stroke-width="2" fill="none" opacity="0.3"/>
                        <path d="M25 30L28 33L35 26" stroke="url(#gradient3)" 
                              stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                            <linearGradient id="gradient3" x1="15" y1="10" x2="45" y2="48">
                                <stop offset="0%" stop-color="#4FACFE"/>
                                <stop offset="100%" stop-color="#00F2FE"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <h3 class="card-title">안전 관리 및 품질 관리</h3>
                <p class="card-description">
                    작업 현장에서의 안전 수칙과 품질 관리 기준을 학습합니다. 
                    사고 예방과 고품질 보수 작업을 위한 체계적인 관리 방법을 익힙니다.
                </p>
                <ul class="card-features">
                    <li>
                        <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        <span>작업 안전 수칙</span>
                    </li>
                    <li>
                        <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        <span>품질 검사 기준</span>
                    </li>
                    <li>
                        <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        <span>환경 보호 가이드</span>
                    </li>
                </ul>
                <div class="card-footer">
                    <span class="card-duration">3주 과정</span>
                    <button class="card-button">
                        <span>자세히 보기</span>
                        <svg viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 3L9 4L15 10L9 16L10 17L17 10L10 3Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## 5. 퀴즈 섹션

### 구조
- 진행률 표시 바
- 동적 문제 표시 영역
- 내비게이션 버튼 (이전/다음/제출)
- 결과 표시 영역

### 코드
```html
<section class="quiz-section" id="quiz">
    <div class="section-container">
        <div class="section-header">
            <span class="section-badge">지식 테스트</span>
            <h2 class="section-title">도로 균열 퀴즈</h2>
            <p class="section-description">
                배운 내용을 확인해보세요! 5개의 문제를 풀고 당신의 실력을 테스트하세요.
            </p>
        </div>
        
        <div class="quiz-container">
            <!-- 진행률 표시 -->
            <div class="quiz-progress">
                <div class="progress-bar">
                    <div class="progress-fill" id="progressFill"></div>
                </div>
                <div class="progress-text">
                    <span id="currentQuestion">1</span> / <span id="totalQuestions">5</span>
                </div>
            </div>
            
            <!-- 문제 표시 영역 (JavaScript로 동적 생성) -->
            <div class="quiz-content" id="quizContent">
                <!-- Questions will be dynamically loaded here -->
            </div>
            
            <!-- 내비게이션 버튼 -->
            <div class="quiz-navigation">
                <button class="quiz-btn quiz-btn-prev" id="prevBtn" disabled>
                    <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 17L11 16L5 10L11 4L10 3L3 10L10 17Z"/>
                    </svg>
                    <span>이전</span>
                </button>
                <button class="quiz-btn quiz-btn-next" id="nextBtn">
                    <span>다음</span>
                    <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 3L9 4L15 10L9 16L10 17L17 10L10 3Z"/>
                    </svg>
                </button>
                <button class="quiz-btn quiz-btn-submit" id="submitBtn" style="display: none;">
                    <span>제출하기</span>
                    <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                </button>
            </div>
            
            <!-- 결과 표시 영역 -->
            <div class="quiz-result" id="quizResult" style="display: none;">
                <div class="result-icon" id="resultIcon"></div>
                <h3 class="result-title" id="resultTitle"></h3>
                <p class="result-score">
                    <span class="score-number" id="scoreNumber">0</span> / 5
                </p>
                <p class="result-message" id="resultMessage"></p>
                <button class="quiz-btn quiz-btn-retry" id="retryBtn">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4 2v6h6M16 18v-6h-6M18 10a8 8 0 11-16 0 8 8 0 0116 0z"/>
                    </svg>
                    <span>다시 도전하기</span>
                </button>
            </div>
        </div>
    </div>
</section>
```

---

## 6. 스크립트 연결

```html
<script src="quiz.js"></script>
<script src="script.js"></script>
</body>
</html>
```

---

## 주요 CSS 클래스 목록

### 레이아웃
- `.navbar` - 내비게이션 바
- `.hero` - 히어로 섹션
- `.objectives` - 학습 목표 섹션
- `.quiz-section` - 퀴즈 섹션

### 컴포넌트
- `.nav-logo` - 로고
- `.nav-links` - 메뉴 링크
- `.nav-cta` - 가입하기 버튼
- `.hero-badge` - 히어로 배지
- `.hero-title` - 메인 타이틀
- `.btn-primary` - 주 버튼
- `.btn-secondary` - 보조 버튼
- `.info-card` - 정보 카드
- `.quiz-container` - 퀴즈 컨테이너

### 상태
- `.active` - 활성 상태
- `.selected` - 선택된 상태
- `.disabled` - 비활성 상태

---

## JavaScript 기능

### quiz.js
- 퀴즈 데이터 관리
- 문제 렌더링
- 답변 선택 처리
- 점수 계산
- 결과 표시

### script.js
- 내비게이션 스크롤 효과
- 부드러운 스크롤
- 카드 애니메이션
- 버튼 인터랙션
- 패럴랙스 효과

---

## 외부 링크

- **가입하기**: https://courageous-halibut-239.notion.site/2eb771d6460080afb799fc699ef93977?pvs=105
- **퀴즈 풀어보기**: #quiz (페이지 내 앵커)

---

## 반응형 브레이크포인트

- **데스크톱**: 1024px 이상
- **태블릿**: 768px - 1024px
- **모바일**: 768px 이하
- **소형 모바일**: 480px 이하
