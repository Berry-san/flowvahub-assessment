# FlowvaHub Rewards System

A full-stack rewards and gamification platform built with React, TypeScript, and Supabase. Features real-time point tracking, daily streak mechanics, and reward redemption with optimistic UI updates.

## Features

- **Daily Claims**: Users can claim rewards daily with streak tracking
- **Points System**: Earn and spend points on various rewards
- **Streak Tracking**: Maintain daily streaks with visual feedback
- **Reward Redemption**: Browse and redeem available rewards
- **Referral System**: Track referrals and earn bonus points
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Real-time Updates**: Optimistic UI with error recovery
- **Type Safety**: Full TypeScript implementation

## Tech Stack

**Frontend**

- React 18 with Vite
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

**Backend**

- Supabase (PostgreSQL, Auth, Row-Level Security)

**Development**

- ESLint (flat config)
- Prettier

## Prerequisites

- Node.js >= 18.0.0
- npm or yarn
- Supabase account ([supabase.com](https://supabase.com))

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Berry-san/flowvahub-assessment.git
cd flowvahub-rewards-assessment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Get these values from your Supabase project settings under **API** > **Project URL** and **Project API keys**.

### 4. Database Setup

Run the following SQL in your Supabase SQL Editor:

```sql
-- Create users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  points INTEGER DEFAULT 0,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_claim_date DATE,
  total_referrals INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create rewards table
CREATE TABLE rewards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  cost INTEGER NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create claims table
CREATE TABLE claims (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  reward_id UUID REFERENCES rewards(id) ON DELETE CASCADE,
  claimed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create referrals table
CREATE TABLE referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_id UUID REFERENCES users(id) ON DELETE CASCADE,
  referred_email TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row-Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE rewards ENABLE ROW LEVEL SECURITY;
ALTER TABLE claims ENABLE ROW LEVEL SECURITY;
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Anyone can view rewards" ON rewards
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Users can insert own claims" ON claims
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own claims" ON claims
  FOR SELECT USING (auth.uid() = user_id);
```

### 5. Seed Sample Data (Optional)

```sql
-- Insert sample rewards
INSERT INTO rewards (title, description, cost, category, image_url) VALUES
  ('Premium Feature Access', '30 days of premium features', 500, 'premium', 'https://example.com/premium.jpg'),
  ('Custom Theme', 'Unlock exclusive themes', 250, 'customization', 'https://example.com/theme.jpg'),
  ('Ad-Free Experience', 'Remove ads for 90 days', 750, 'premium', 'https://example.com/adfree.jpg');

-- Insert demo user
INSERT INTO users (id, email, points, current_streak, longest_streak) VALUES
  ('demo-user-123', 'demo@example.com', 1000, 5, 10);
```

### 6. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 7. Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── DailyRewards.tsx      # Daily claim UI and streak logic
│   ├── RewardCard.tsx         # Individual reward display component
│   ├── RewardsList.tsx        # Grid layout for rewards
│   └── UserStats.tsx          # User points, streaks, and referrals
├── hooks/
│   └── useRewards.ts          # Custom hook for Supabase operations
├── lib/
│   └── supabase.ts            # Supabase client configuration
├── types/
│   └── index.ts               # TypeScript type definitions
├── App.tsx                    # Root application component
└── main.tsx                   # Application entry point
```

## Architecture Decisions

### Authentication

**Current Implementation**: Demo mode with hardcoded user ID (`demo-user-123`)

**Production Path**: Replace with Supabase Auth using email/password or OAuth providers

```typescript
// In useRewards.ts - Replace:
const userId = "demo-user-123";

// With:
const {
  data: { user },
} = await supabase.auth.getUser();
const userId = user?.id;
```

### State Management

Uses React hooks and context for local state management. For larger applications, consider:

- Redux Toolkit for complex global state
- React Query for server state caching
- Zustand for simpler global state needs

### Data Fetching

Implements optimistic updates for better UX:

1. Update local state immediately
2. Send request to Supabase
3. Rollback on error with user notification

### Styling Approach

Tailwind CSS utility-first approach with:

- Custom color palette for brand consistency
- Responsive breakpoints (sm, md, lg, xl)
- Dark mode support via class strategy

## Performance Considerations

**Current Limitations**:

- No pagination (acceptable for small datasets)
- Client-side data fetching on mount
- No request caching

**Recommended Improvements**:

- Implement virtual scrolling for large reward lists
- Add React Query for automatic caching and refetching
- Use Supabase real-time subscriptions for live updates
- Implement code splitting with React.lazy()

## Security

- Row-Level Security (RLS) enabled on all tables
- Environment variables for sensitive credentials
- Anon key safe for client-side use (RLS protects data)
- Production deployments should use additional security headers

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Configure environment variables in Vercel dashboard.

## Known Issues & Limitations

1. **Referral System**: UI implemented but backend logic incomplete
2. **Auth Bypass**: Demo mode not suitable for production
3. **No Pagination**: All rewards loaded at once
4. **No Image Uploads**: Reward images use URLs only

## Future Enhancements

- [ ] Complete referral system implementation
- [ ] Add user profile management
- [ ] Implement reward categories filtering
- [ ] Add search functionality
- [ ] Email notifications for streak milestones
- [ ] Admin dashboard for reward management
- [ ] Analytics and usage tracking
- [ ] Multi-language support

## Contributing

This is an assessment project. For production use, please contact the author.

## License

This project is for assessment and demonstration purposes only. Not licensed for commercial use without explicit permission.

---

Built with React, TypeScript, and Supabase for Hostinger — React Full-Stack Developer Assessment
