import React from 'react';

const Fadiga = ({ valor = 0 }) => {
  const normalizedValue = Math.min(Math.max(valor, 0), 100);

  return (
    <div style={styles.card}>
      <div style={styles.header}>FADIGA</div>
      <div style={styles.value}>{normalizedValue}%</div>
      <div style={styles.progressBarBackground}>
        <div
          style={{
            ...styles.progressBarFill,
            width: `${normalizedValue}%`,
          }}
        />
      </div>
      <div style={styles.description}>
        Estimativa baseada no estado semanal atual.
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#1f1f25',
    borderRadius: 16,
    padding: '20px 18px',
    maxWidth: 320,
    color: '#f5f5f7',
    boxShadow: '0 10px 22px rgba(0, 0, 0, 0.18)',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  header: {
    fontSize: 14,
    letterSpacing: 1.4,
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: 10,
    color: '#ffffff',
  },
  value: {
    fontSize: 34,
    fontWeight: 700,
    marginBottom: 18,
    color: '#ffffff',
  },
  progressBarBackground: {
    width: '100%',
    height: 12,
    borderRadius: 999,
    backgroundColor: '#35363f',
    overflow: 'hidden',
    marginBottom: 16,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#ff8c42',
    transition: 'width 0.3s ease',
  },
  description: {
    fontSize: 12,
    lineHeight: 1.5,
    color: '#c7c7d1',
  },
};

export default Fadiga;
