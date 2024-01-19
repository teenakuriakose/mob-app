import {renderHook, act} from '@testing-library/react-hooks';
import {useCredentialsValidation} from '../useCredentialsValidation';
import {COUNTRIES} from '../../core/constants';

const mockT = jest.fn(key => key);

describe('useCredentialsValidation Hook', () => {
  it('should validate username for AE country code', async () => {
    const {result, waitForNextUpdate} = renderHook(() =>
      useCredentialsValidation(COUNTRIES.AE, mockT),
    );

    await act(async () => {
      result.current.setUsername('Valid123');
      await waitForNextUpdate();
    });

    expect(result.current.usernameError).toBe('');
    expect(result.current.isUsernameValid).toEqual(true);
  });

  it('should validate password length', async () => {
    const {result, waitForNextUpdate} = renderHook(() =>
      useCredentialsValidation(COUNTRIES.AE, mockT),
    );

    await act(async () => {
      result.current.setPassword('ValidPassword123');
      await waitForNextUpdate();
    });

    expect(result.current.passwordError).toBe('');
    expect(result.current.isPasswordValid).toEqual(true);
  });

  it('should handle onBlur for username and password', () => {
    const {result} = renderHook(() =>
      useCredentialsValidation(COUNTRIES.AE, mockT),
    );

    act(() => {
      result.current.handleUsernameFocus();
    });

    act(() => {
      result.current.handlePasswordFocus();
    });
  });
});
