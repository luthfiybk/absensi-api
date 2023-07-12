const pool = require('./../connection')

const m_jabatan = async () => {
    const client = await pool.connect()
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS m_jabatan(
                id_jabatan SERIAL PRIMARY KEY,
                nama_jabatan VARCHAR(20) UNIQUE
            );
        `
        await client.query(query)
        console.log('Table berhasil dibuat')
    } catch (error) {
        console.error(error)   
    } finally {
        client.release()
    }
}

m_jabatan()