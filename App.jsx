import React from 'react'

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>Kevin Richard D</h1>
        <nav style={styles.nav}>
          <a href="#home" style={styles.navLink}>Home</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#skills" style={styles.navLink}>Skills</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <main style={styles.main}>
        <section id="home" style={styles.section}>
          <h1 style={styles.title}>Hi, I'm Kevin Richard D</h1>
          <p style={styles.subtitle}>Frontend Developer & BCA Student</p>
          <button style={styles.button}>Contact Me</button>
        </section>

        <section id="about" style={styles.section}>
          <h2>About Me</h2>
          <p>I'm a BCA student passionate about web development.</p>
          <p>Email: kevinrichard7719053@gmail.com</p>
          <p>Phone: +91 90425 76861</p>
        </section>

        <section id="skills" style={styles.section}>
          <h2>My Skills</h2>
          <div style={styles.skills}>
            <span style={styles.skill}>HTML</span>
            <span style={styles.skill}>CSS</span>
            <span style={styles.skill}>JavaScript</span>
            <span style={styles.skill}>React</span>
            <span style={styles.skill}>Python</span>
            <span style={styles.skill}>Java</span>
          </div>
        </section>

        <section id="contact" style={styles.section}>
          <h2>Contact Me</h2>
          <form style={styles.form}>
            <input type="text" placeholder="Your Name" style={styles.input} />
            <input type="email" placeholder="Your Email" style={styles.input} />
            <textarea placeholder="Your Message" style={styles.textarea}></textarea>
            <button type="submit" style={styles.button}>Send</button>
          </form>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 Kevin Richard D</p>
      </footer>
    </div>
  )
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
    padding: '20px 0',
    borderBottom: '1px solid #ccc'
  },
  logo: {
    color: '#3a0ca3',
    fontSize: '24px'
  },
  nav: {
    display: 'flex',
    gap: '20px'
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500'
  },
  main: {
    minHeight: '70vh'
  },
  section: {
    marginBottom: '60px',
    padding: '40px 0'
  },
  title: {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#3a0ca3'
  },
  subtitle: {
    fontSize: '24px',
    color: '#666',
    marginBottom: '30px'
  },
  button: {
    background: '#3a0ca3',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
  },
  skill: {
    background: '#f0f0f0',
    padding: '10px 20px',
    borderRadius: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    maxWidth: '500px'
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  textarea: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    height: '150px'
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px',
    padding: '20px',
    borderTop: '1px solid #ccc'
  }
}

export default App