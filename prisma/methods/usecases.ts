

// Use cases
try {
    // Caso 1: Registrar um novo usuário com dados válidos
    const newUser1 = signup({
        name: "John Doe",
        email: "johndoe@example.com",
        password: "Password123",
    });
    console.log("Caso 1: User registered successfully:", newUser1);

    // Caso 2: Tentar registrar um usuário com email inválido
    const newUser2 = signup({
        name: "Alice",
        email: "alice@example",
        password: "StrongPassword123",
    });
    console.log("Caso 2: User registered successfully:", newUser2);

    // Caso 3: Tentar registrar um usuário com senha curta
    const newUser3 = signup({
        name: "Bob",
        email: "bob@example.com",
        password: "Short",
    });
    console.log("Caso 3: User registered successfully:", newUser3);

    // Caso 4: Tentar registrar um usuário com senha fraca
    const newUser4 = signup({
        name: "Eve",
        email: "eve@example.com",
        password: "weakpassword",
    });
    console.log("Caso 4: User registered successfully:", newUser4);

    // Caso 5: Tentar registrar um usuário com nome muito curto
    const newUser5 = signup({
        name: "A",
        email: "a@example.com",
        password: "StrongPassword123",
    });
    console.log("Caso 5: User registered successfully:", newUser5);

    // Caso 6: Tentar registrar um usuário com nome contendo números
    const newUser6 = signup({
        name: "John123",
        email: "john@example.com",
        password: "StrongPassword123",
    });
    console.log("Caso 6: User registered successfully:", newUser6);

    // Caso 7: Tentar registrar um usuário com um email já existente
    const newUser7 = signup({
        name: "Marry",
        email: "johndoe@example.com",
        password: "NewPassword123",
    });
    console.log("Caso 7: User registered successfully:", newUser7);
} catch (error) {
    console.error("Error during registration:", error.message);
}


// Login Use cases
try {
    // Caso 1: Login com credenciais válidas
    const loggedInUser1 = login({
        email: "johndoe@example.com",
        password: "Password123",
    });
    console.log("Caso 1: User logged in successfully:", loggedInUser1);

    // Caso 2: Tentar fazer login com um email não existente
    const loggedInUser2 = login({
        email: "nonexistent@example.com",
        password: "Password123",
    });
    console.log("Caso 2: User logged in successfully:", loggedInUser2);

    // Caso 3: Faz um loggout
    
} catch (error) {
    console.error("Error during login:", error.message);
}
