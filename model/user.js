const pool = require('./../connection')

const user = async () => {
    const client = await pool.connect();
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS "user" (
                id_user SERIAL PRIMARY KEY,
                NRP VARCHAR(30) UNIQUE,
                nama VARCHAR(50),
                password VARCHAR(30),
                email VARCHAR(50),
                jabatan VARCHAR(20),
                subdit VARCHAR(20),
                unit VARCHAR(20)
            );
        `;
        await client.query(query);
        console.log('Tabel user berhasil dibuat');
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    } finally {
        client.release();
    }
};

user();
