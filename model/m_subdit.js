const pool = require('./../connection')

const m_subdit = async () => {
    const client = await pool.connect()
    try {
        const  query = `
            CREATE TABLE IF NOT EXISTS m_subdit(
                id_subdit SERIAL PRIMARY KEY,
                nama_subdit VARCHAR(40) UNIQUE
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

m_subdit()