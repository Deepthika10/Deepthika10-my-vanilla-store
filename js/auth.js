// js/auth.js
import { supabase } from './supabaseClient.js';

// --- Navbar Setup ---
export const setupNavbar = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    const user = session?.user;
    
    const navbarContainer = document.getElementById('navbar-container');
    if (!navbarContainer) return;

    let navLinks = `
        <a href="/index.html">Dashboard</a>
        <a href="/checkout.html">Cart</a>
    `;

    if (user) {
        navLinks += `
            <a href="/my-orders.html">My Orders</a>
            <button id="logout-btn" class="btn btn-danger">Logout</button>
        `;
    } else {
        navLinks += `<a href="/login.html" class="btn btn-primary">Login</a>`;
    }
    
    // Check if user is admin
    if (user) {
        const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single();
        if (profile && profile.role === 'ADMIN') {
            navLinks += `<a href="/admin/index.html" class="btn">Admin</a>`;
        }
    }
    
    navbarContainer.innerHTML = `
        <nav class="navbar">
            <a href="/index.html" class="logo">E-Store</a>
            <div class="nav-links">
                ${navLinks}
            </div>
        </nav>
    `;

    // Add event listener for logout button if it exists
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
};

// --- Auth Handlers ---
export const handleLogin = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        errorMessage.textContent = error.message;
    } else {
        window.location.href = '/index.html'; // Redirect on successful login
    }
};

export const handleRegister = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
        errorMessage.textContent = error.message;
    } else {
        alert('Registration successful! Please check your email for a confirmation link.');
        window.location.href = '/login.html';
    }
};

export const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/index.html'; // Redirect to home on logout
};

// Listen for auth state changes to update UI in real-time
supabase.auth.onAuthStateChange((_event, session) => {
    setupNavbar();
});
