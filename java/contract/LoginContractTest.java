import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class LoginContractTest {

    @Test
    void loginResponseMustContainToken() {
        LoginResponse response = AuthClient.login("user@test.com", "Password123!");

        assertNotNull(response.getToken());
        assertTrue(response.getToken().length() > 20);
    }
}
