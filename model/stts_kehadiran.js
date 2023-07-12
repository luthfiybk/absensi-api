const pool = require('./../connection')

const stts_kehadiran = async () => {
    const client = await pool.connect()
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS stts_kehadiran (
                id_status SERIAL PRIMARY KEY,
                nama_status VARCHAR(20)
            );
        `
        await client.query(query)
        console.log("Table berhasil dibuat")
    } catch (error) {
        console.error(error)
    } finally {
        client.release()
    }
}

stts_kehadiran()