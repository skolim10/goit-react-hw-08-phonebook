import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div
      style={{
        position: 'fixed',
        width: '95%',

        top: 0,
        zIndex: 1,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 8px',
        borderRadius: '4px',
        boxShadow: '5px 7px 9px rgba(61, 84, 68, 0.3)',
        background: 'rgba(61, 84, 68, 0.1)',
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
