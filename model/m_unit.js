const pool = require('./../connection')

const m_unit = async () => {
    const client = await pool.connect()
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS m_unit(
                id_unit SERIAL PRIMARY KEY,
                nama_subdit VARCHAR(40) REFERENCES m_subdit (nama_subdit),
                nama_unit VARCHAR(40) UNIQUE,
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

m_unit()