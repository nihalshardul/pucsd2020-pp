#include <stdio.h>

#include <assert.h>
#include <zdb.h>

int main(void)
{
    URL_T url= URL_new("mysql://localhost:3306/test?user=test&password=p");
    assert(url);
    ConnectionPool_T pool = ConnectionPool_new(url);
    ConnectionPool_start(pool);
    Connection_T con = ConnectionPool_getConnection(pool);
    TRY
    {
        Connection_execute(con, "create table users(name varchar(255))");
        PreparedStatement_T p = Connection_prepareStatement(con, "insert into users values (?)");
        const char *user[] = {
            "prince kumar", "Sagar adhalge","Nayan Lonkar", 0};
        for (int i = 0; user[i]; i++)
        {
            PreparedStatement_setString(p, 1, user[i]);
            PreparedStatement_execute(p);
        }
        ResultSet_T r = Connection_executeQuery(con, "select name from users");
        while (ResultSet_next(r))
            printf("%s\n", ResultSet_getString(r, 1));
        Connection_execute(con, "drop table users;");
    }
    CATCH(SQLException)
    {
        printf("SQLException -- %s\n", Exception_frame.message);
    }
    FINALLY
    {
        Connection_close(con);
    }
    END_TRY;
    ConnectionPool_free(&pool);
    URL_free(&url);
    return 0;
}
